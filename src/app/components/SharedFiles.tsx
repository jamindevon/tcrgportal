'use client';

import { useState } from 'react';
import { FileText, Download, Eye, Calendar, User, Folder, Search, Filter } from 'lucide-react';

interface File {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  owner: string;
  url: string;
}

export default function SharedFiles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const files: File[] = [
    {
      id: '1',
      name: 'Property Purchase Agreement Template.pdf',
      type: 'pdf',
      size: '2.4 MB',
      modified: '2 days ago',
      owner: 'Legal Team',
      url: '#'
    },
    {
      id: '2',
      name: 'Market Analysis Report Q3 2024.xlsx',
      type: 'excel',
      size: '1.8 MB',
      modified: '1 week ago',
      owner: 'Analytics Team',
      url: '#'
    },
    {
      id: '3',
      name: 'Client Onboarding Checklist.docx',
      type: 'word',
      size: '0.9 MB',
      modified: '3 days ago',
      owner: 'Operations',
      url: '#'
    },
    {
      id: '4',
      name: 'Property Photography Guidelines.pdf',
      type: 'pdf',
      size: '3.2 MB',
      modified: '5 days ago',
      owner: 'Marketing Team',
      url: '#'
    },
    {
      id: '5',
      name: 'Commission Structure 2024.pdf',
      type: 'pdf',
      size: '1.5 MB',
      modified: '1 month ago',
      owner: 'HR Department',
      url: '#'
    },
    {
      id: '6',
      name: 'Lead Tracking Template.xlsx',
      type: 'excel',
      size: '0.7 MB',
      modified: '2 weeks ago',
      owner: 'Sales Team',
      url: '#'
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'excel':
        return <FileText className="w-5 h-5 text-green-500" />;
      case 'word':
        return <FileText className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-realtor-slate" />;
    }
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || file.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-realtor-stone">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Folder className="w-6 h-6 text-realtor-blue" />
          <h2 className="text-2xl font-bold text-realtor-dark">Shared Files</h2>
        </div>
        <div className="text-sm text-realtor-slate">
          {filteredFiles.length} files
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-realtor-slate" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-realtor-stone rounded-lg focus:ring-2 focus:ring-realtor-blue focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-realtor-slate" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="pl-10 pr-8 py-2 border border-realtor-stone rounded-lg focus:ring-2 focus:ring-realtor-blue focus:border-transparent appearance-none bg-white"
          >
            <option value="all">All Types</option>
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
            <option value="word">Word</option>
          </select>
        </div>
      </div>

      {/* Files List */}
      <div className="space-y-3">
        {filteredFiles.map((file) => (
          <div key={file.id} className="flex items-center justify-between p-4 bg-realtor-light rounded-lg hover:bg-realtor-stone transition-colors">
            <div className="flex items-center space-x-4">
              {getFileIcon(file.type)}
              <div>
                <h3 className="font-medium text-realtor-dark">{file.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-realtor-slate">
                  <span>{file.size}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{file.modified}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{file.owner}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-realtor-slate hover:text-realtor-blue transition-colors">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-2 text-realtor-slate hover:text-realtor-blue transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredFiles.length === 0 && (
        <div className="text-center py-12">
          <Folder className="w-12 h-12 text-realtor-slate mx-auto mb-4" />
          <p className="text-realtor-slate">No files found matching your search criteria.</p>
        </div>
      )}

      {/* Google Drive Integration Notice */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Folder className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Google Drive Integration</h3>
            <p className="text-sm text-blue-700 mb-3">
              This section integrates with your Google Drive folder for seamless file sharing and collaboration.
            </p>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Connect Google Drive →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
