import React, { ChangeEvent, useCallback, useRef, useState, useEffect } from 'react';

interface IFileTypes {
  id: number;
  object: File;
}

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);

  const dragRef = useRef<HTMLLabelElement | null>(null);
  const fileId = useRef<number>(0);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      // let tempFiles: IFileTypes[] = files;

      if (e.type === 'drop') {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }

      // for (const file of selectFiles) {
      //   tempFiles = [
      //     ...tempFiles,
      //     {
      //       id: fileId.current++,
      //       object: file,
      //     },
      //   ];
      // }

      // setFiles(tempFiles);
    },
    [files],
  );

  const handleFilterFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: IFileTypes) => file.id !== id));
    },
    [files],
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div className="DragDrop">
      <label
        className={isDragging ? 'DragDrop-File-Dragging' : 'DragDrop-File'}
        htmlFor="fileUpload"
        ref={dragRef}
      >
        <input
          type="file"
          id="fileUpload"
          style={{ display: 'none' }}
          multiple={false}
          onChange={onChangeFiles}
        />
        <div>여기에 파일을 드래그하거나 하단에 파일 선택을 통해 등기부등본을 업로드해주세요.</div>
      </label>

      <div className="DragDrop-Files">
        {files.length > 0 &&
          files.map((file: IFileTypes) => {
            const {
              id,
              object: { name },
            } = file;

            return (
              <div key={id}>
                <div>{name}</div>
                <button
                  className="DragDrop-Files-Filter"
                  type="button"
                  onClick={() => handleFilterFile(id)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DragAndDrop;
