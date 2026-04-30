import React, { useRef, ChangeEvent } from 'react';
import Input from '../Input/Input';
import { ReactComponent as File } from '../../images/file-icon.svg';

interface FileInputWithTextProps {
  id: string;
  label: string;
  name: string;
  value: string | null;
  CustomWidth?:string
  onChange: (fileName: string) => void;
}

const FileInputWithText: React.FC<FileInputWithTextProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  CustomWidth,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onChange) {
      onChange(file.name);
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div >
      <input
        type="file"
        id={id}
        name={name}
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
      <Input
        LabelFor={id}
        LabelText={label}
        InputName={name}
        InputType="text"
        InputPlaceholder="Choose the file"
        PostContent={<File />}
        Value={value || ''}
        onClick={handleFileInputClick}
        ReadOnly={true}
        CustomWidth={CustomWidth}
    />
    </div>
  );
};

export default FileInputWithText
