import React from "react";

interface CompIndexProps {
  onClick: () => void;
  page: number;
  section: string[];
}

enum PageMenu {
  PAGE_HOME = 0,
  PAGE_SKILLS,
  PAGE_PROJECTS,
}

const CompIndex: React.FC<CompIndexProps> = ({
  onClick,
  page,
  section,
}: CompIndexProps) => {
  return (
    <h2 className="text-[15px] text-gray-800 dark:text-white">On this page</h2>
  );
};

export default CompIndex;
