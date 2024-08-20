"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import FlashCards from "./FlashCards";

export function Modal() {
  const [flashcardTitle, setFlashCardTitle] = useState("");
  const [flashcardText, setFlashCardText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isTextDialogOpen, setIsTextDialogOpen] = useState(false);
  const [isColorDialogOpen, setIsColorDialogOpen] = useState(false);
  const [isFlashCardVisible, setIsFlashCardVisible] = useState(false);
  const [isTitleDialogOpen, setIsTitleDialogOpen] = useState(false); // Set to false initially

  // Handle Title Submission
  const handleTitleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTitleDialogOpen(false);
    setIsTextDialogOpen(true);
  };

  // Handle Text Submission
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTextDialogOpen(false);
    setIsColorDialogOpen(true);
  };

  // Handle Color Selection
  const handleColorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsColorDialogOpen(false);
    setIsFlashCardVisible(true); // Display the FlashCard
  };

  // Handle Generate Button Click
  const handleGenerateClick = () => {
    setFlashCardTitle(""); // Clear previous data
    setFlashCardText("");
    setSelectedColor("");
    setIsFlashCardVisible(false); // Hide FlashCard
    setIsTitleDialogOpen(true); // Show title dialog
  };

  return (
    <>
      {/* Generate Button */}
      <div className="flex justify-center mt-16">
        <button
          onClick={handleGenerateClick}
          className="hover:bg-slate-900 bg-slate-600 text-white rounded-lg px-4 py-2"
        >
          Generate Flashcard
        </button>
      </div>

      {/* Display dialogs or FlashCard based on state */}
      {isTitleDialogOpen && (
        <Dialog open={isTitleDialogOpen} onOpenChange={setIsTitleDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Title of the Flash Card</DialogTitle>
            </DialogHeader>
            <form className="flex flex-col gap-y-4" onSubmit={handleTitleSubmit}>
              <input
                placeholder="Title"
                value={flashcardTitle}
                onChange={(e) => setFlashCardTitle(e.target.value)}
                required
                className="border border-slate-300 self-center md:self-start outline outline-slate-700 rounded-lg h-10 pl-4 w-64 text-gray-900"
              />
              <DialogFooter>
                <button
                  type="submit"
                  className="bg-slate-900 flex justify-center hover:bg-slate-800 text-white rounded-lg px-4 py-2"
                >
                  Submit
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {isTextDialogOpen && !isFlashCardVisible && (
        <Dialog open={isTextDialogOpen} onOpenChange={setIsTextDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Text of the Flash Card</DialogTitle>
            </DialogHeader>
            <form className="flex flex-col gap-y-4" onSubmit={handleTextSubmit}>
              <input
                placeholder="Text"
                value={flashcardText}
                onChange={(e) => setFlashCardText(e.target.value)}
                required
                className="border border-slate-300 mb-2 self-center lg:self-start outline outline-slate-700 rounded-lg h-10 pl-4 w-64 text-gray-900"
              />
              <DialogFooter>
                <button
                  type="submit"
                  className="bg-slate-900 flex justify-center hover:bg-slate-800 text-white rounded-lg px-4 py-2"
                >
                  Submit
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {isColorDialogOpen && !isFlashCardVisible && (
        <Dialog open={isColorDialogOpen} onOpenChange={setIsColorDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Select the color of the Flash Card</DialogTitle>
            </DialogHeader>
            <form className="flex flex-col gap-y-4" onSubmit={handleColorSubmit}>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-red-600"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Red
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-blue-600"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Blue
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-yellow-500"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Yellow
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-green-600"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Green
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-black"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Black
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-slate-700"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Slate
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="flashcardColor"
                  value="bg-purple-600"
                  onChange={(e) => setSelectedColor(e.target.value)}
                  required
                />
                Purple
              </label>
              <DialogFooter>
                <button
                  type="submit"
                  className="bg-slate-900 flex justify-center hover:bg-slate-800 text-white rounded-lg px-4 py-2"
                >
                  Submit
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {isFlashCardVisible && (
        <>
            <FlashCards
            color={selectedColor}
            text={flashcardText}
            title={flashcardTitle}
          />
        </>
      )}
    </>
  );
}

export default Modal;

