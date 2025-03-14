import React from "react";
import { useState, useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Toaster, toast } from "react-hot-toast";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { FaCopy } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { MdFormatAlignRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const CODE_DOC_ID = "sharedCode";

const extensionToLanguage = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  html: "html",
  css: "css",
  json: "json",
  py: "python",
  java: "java",
  cpp: "cpp",
  c: "c",
  php: "php",
  rb: "ruby",
  go: "go",
  swift: "swift",
  rs: "rust",
};

const CodeEditor = ({ containerClass }) => {
  const [fileName, setFileName] = useState("");
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const fileExtension = file.name.split(".").pop();
    const detectedLanguage = extensionToLanguage[fileExtension] || "plaintext";
    setLanguage(detectedLanguage);

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      updateCode(fileContent);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    const fetchCode = async () => {
      const docRef = doc(db, "codes", CODE_DOC_ID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCode(docSnap.data().code);
      } else {
        await setDoc(docRef, { code: "// Write your code here" });
      }
    };

    fetchCode();
  }, []);

  useEffect(() => {
    const docRef = doc(db, "codes", CODE_DOC_ID);
    const unsub = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setCode(docSnap.data().code);
      }
    });
    return () => unsub();
  }, []);

  const updateCode = async (newCode) => {
    setCode(newCode);
    const docRef = doc(db, "codes", CODE_DOC_ID);
    await setDoc(docRef, { code: newCode });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard", {
      duration: 2000,
      position: "center",
      icon: "📋",
    });
  };

  const formatCode = () => {
    if (!editorRef.current) return;
    editorRef.current.getAction("editor.action.formatDocument")?.run();
    toast.success("Code formatted", {
      duration: 2000,
      position: "center",
      icon: "🔄",
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Toaster />
      <div className={`w-full h-screen p-4 flex flex-col ${containerClass}`}>
        <div className="flex h-[90%] w-full flex-row mt-10">
          <Editor
            height="100%"
            width="100%"
            language={language}
            value={code}
            onChange={updateCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: true, showSlider: "always", side: "right" },
              fontSize: 20,
              fontWeight: "bold",
              wordWrap: "on",
            }}
            onMount={handleEditorDidMount}
          />
        </div>
        <div className="mt-2 w-full flex flex-row items-center justify-center">
          <HoverCard>
            <HoverCardTrigger>
              <button
                onClick={copyCode}
                className="text-white px-4 py-2 rounded-l-lg border-2 border-white cursor-pointer"
              >
                <FaCopy size={30} />
              </button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-black font-bold flex items-center justify-center">
                Copy code to clipboard
              </p>
            </HoverCardContent>
          </HoverCard>

          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            ref={fileInputRef}
          />

          <HoverCard>
            <HoverCardTrigger>
              <button
                onClick={handleButtonClick}
                className="text-white px-4 py-2 border-2 border-white cursor-pointer"
              >
                <FaFileUpload size={30} />
              </button>
            </HoverCardTrigger>

            <HoverCardContent>
              <p className="text-black font-bold flex items-center justify-center">
                Upload file
              </p>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <button
                onClick={formatCode}
                className="text-white px-4 py-2 border-2 border-white cursor-pointer"
              >
                <MdFormatAlignRight size={30} />
              </button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-black font-bold flex items-center justify-center">
                Format code
              </p>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <button
                onClick={() => (window.location.href = "/")}
                className="text-white px-4 py-2 border-2 border-white rounded-r-lg cursor-pointer"
              >
                <FaHome size={30} />
              </button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-black font-bold flex items-center justify-center">
                Go to home
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
