"use client";

import React from 'react';
import { Project } from '@/types/project';
import Image from 'next/image';
import { X, MapPin, Calendar, Database, Zap, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            >
                <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Left/Top Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-100 min-h-[300px]">
                {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#062516] text-[#FFFA84]">
                        <Zap className="w-16 h-16 opacity-50" />
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#FFFA84]" />
                        <span className="font-medium">{project.location}, {project.country}</span>
                    </div>
                </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-3/5 p-8 md:p-10 bg-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFFA84]/20 text-[#062516] text-xs font-bold uppercase tracking-wider mb-4">
                    {project.status}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-6 leading-tight">
                    {project.title}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Capacity</p>
                        <p className="font-bold text-[#062516]">{project.capacity || 'N/A'}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Technology</p>
                        <p className="font-bold text-[#062516]">{project.technology || 'N/A'}</p>
                    </div>
                </div>

                <div className="prose prose-green max-w-none text-gray-600 mb-8 leading-relaxed">
                   <p className="whitespace-pre-line">{project.description}</p>
                </div>

                {/* Specs List */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                    {project.beneficiary && (
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#062516] mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="block text-xs text-gray-400 font-bold uppercase">Beneficiary</span>
                                <span className="font-medium text-gray-900">{project.beneficiary}</span>
                            </div>
                        </div>
                    )}
                     {project.financing && (
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#062516] mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="block text-xs text-gray-400 font-bold uppercase">Financing</span>
                                <span className="font-medium text-gray-900">{project.financing}</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
