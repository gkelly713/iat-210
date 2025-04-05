
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
    <div className="space-y-4">
      {references.map((ref) => (
        <div key={ref.id} className="pl-8 -indent-8 text-sm">
          <p>
            {ref.author} ({ref.year}). <em>{ref.title}</em>. {ref.source}.
            {ref.url && (
              <> Available at: <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline break-words"
              >
                {ref.url}
              </a></>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReferenceList;
