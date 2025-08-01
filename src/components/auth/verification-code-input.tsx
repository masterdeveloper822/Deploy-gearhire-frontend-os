import React, { useRef, useEffect } from "react"

interface VerificationCodeInputProps {
  value: string[]
  onChange: (value: string[]) => void
  disabled?: boolean
  autoFocus?: boolean
  onEnter?: () => void
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  value,
  onChange,
  disabled = false,
  autoFocus = false,
  onEnter
}) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])
  const focusedIndex =
    value.findIndex((v) => v === "") === -1
      ? 5
      : value.findIndex((v) => v === "")

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [autoFocus])

  const handleInputChange = (i: number, val: string) => {
    const char = val.slice(0, 1)
    if (!/^[0-9a-zA-Z]?$/.test(char)) return
    const newValue = [...value]
    newValue[i] = char
    onChange(newValue)
    if (char && i < 5 && inputRefs.current[i + 1]) {
      setTimeout(() => {
        inputRefs.current[i + 1]?.focus()
        inputRefs.current[i + 1]?.select()
      }, 0)
    }
  }

  const handleKeyDown = (
    i: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (value[i]) {
        const newValue = [...value]
        newValue[i] = ""
        onChange(newValue)
      } else if (i > 0) {
        inputRefs.current[i - 1]?.focus()
      }
    } else if (e.key === "ArrowLeft" && i > 0) {
      inputRefs.current[i - 1]?.focus()
    } else if (e.key === "ArrowRight" && i < 5) {
      inputRefs.current[i + 1]?.focus()
    } else if (e.key === "Enter" && value.every((v) => v !== "") && typeof onEnter === "function") {
      onEnter();
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text").slice(0, 6)
    if (/^[0-9a-zA-Z]{6}$/.test(paste)) {
      onChange(paste.split(""))
      inputRefs.current[5]?.focus()
      e.preventDefault()
    }
  }

  const handleFocus = (i: number) => {
    inputRefs.current[i]?.select()
  }

  return (
    <div className="flex justify-between gap-1 px-10 sm:gap-2 sm:px-3">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          type="text"
          maxLength={1}
          value={value[i]}
          onChange={(e) => handleInputChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(i)}
          disabled={disabled || i > focusedIndex}
          className={`h-10 w-10 rounded-lg border-2 text-center font-mono text-xl font-bold sm:h-12 sm:w-12 ${
            value[i]
              ? "border-sky-400 bg-sky-50"
              : i === focusedIndex
                ? "border-sky-500"
                : i < focusedIndex
                  ? "border-gray-300"
                  : "border-gray-200 bg-gray-100"
          } focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60`}
        />
      ))}
    </div>
  )
}

export { VerificationCodeInput }
