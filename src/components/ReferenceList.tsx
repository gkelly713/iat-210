
import React from 'react';

interface Reference {
  id: string;
  author: string;
  year: string;
  title: string;
  source: string;
  url?: string;
}

interface ReferenceListProps {
  references: Reference[];
}

const ReferenceList: React.FC<ReferenceListProps> = ({ references }) => {
  return (
    <div className="space-y-6">
      {references.map((ref) => (
        <div key={ref.id} className="pl-10 -indent-8 text-sm">
          <p>
            {ref.author} ({ref.year}). {ref.title}. {ref.source}.
            {ref.url && (
              <> {ref.url}</>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReferenceList;
