import React from 'react';

type InputProps = {
  label: string;
  placeholder: string;
  name?: string;
  valueText: string;
  onChangeText: (text: string) => void;
  errorMessage?: string;
}

export function Input({ label, name, valueText, onChangeText, errorMessage, placeholder, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-6 w-full md:w-72">
      <div className="relative h-11 w-full min-w-[200px]">
        <input 
          {...rest} 
          name={name} 
          value={valueText} 
          onChange={(e) => onChangeText(e.target.value)} 
          placeholder={placeholder}
          className={`peer h-full w-full border-b ${errorMessage ? "border-red-500" : "border-blue-gray-200"} bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`} 
        />
        <label
          className={`
            after:content[' '] pointer-events-none absolute left-0 -top-6 flex 
            h-full w-full select-none !overflow-visible truncate text-lg font-normal 
            leading-tight ${errorMessage ? "text-red-500" : "text-gray-500" }  transition-all after:absolute after:-bottom-6 after:block 
            after:w-full after:scale-x-0 after:border-b-2 ${errorMessage ? "border-red-500" : "after:border-gray-500"} after:transition-transform 
            after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 
            peer-focus:text-lg peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 
            peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}>
          {label}
        </label>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
