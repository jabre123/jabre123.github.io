import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "MK", name: "Македонски" },
    { code: "SR", name: "Српски" },
    { code: "AL", name: "Shqip" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
      >
        <span>{selectedLang}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg glass border border-gray-200/20">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang.code);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};