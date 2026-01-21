"use client";

import React, { useEffect, useState } from 'react';
import { getProjects, addProject, uploadProjectImage, deleteProject } from '@/lib/projects';
import { seedDatabase } from '@/lib/seed-projects';
import { Project } from '@/types/project';
import ProjectForm from '@/components/admin/ProjectForm';
import Image from 'next/image';
import { Plus, Trash2, Edit2, X, Database } from 'lucide-react';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm("This will add sample West Africa projects. Continue?")) return;
    setLoading(true);
    await seedDatabase();
    await fetchProjects();
    setLoading(false);
  };

  const handleCreate = async (data: Omit<Project, 'id'>, file: File | null) => {
    setSubmitting(true);
    try {
      let imageUrl = '';
      if (file) {
        const path = `projects/${Date.now()}_${file.name}`;
        imageUrl = await uploadProjectImage(file, path); // Use the service function
      }
      
      await addProject({
        ...data,
        imageUrl
      });
      
      await fetchProjects();
      setIsFormOpen(false);
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Projects Management</h1>
        <div className="flex gap-4">
            <button
                onClick={handleSeed}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all"
            >
            <Database className="w-5 h-5" />
            Load Sample Data
            </button>
            <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#062516] text-[#FFFA84] rounded-full font-semibold hover:bg-[#08301d] transition-all shadow-lg hover:shadow-xl"
            >
            <Plus className="w-5 h-5" />
            Add New Project
            </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Add New Project</h2>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <ProjectForm onSubmit={handleCreate} isLoading={submitting} />
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center p-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#062516]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-shadow">
              <div className="h-24 w-32 relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                {project.imageUrl ? (
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-xs">No Image</div>
                )}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-500">{project.country} • {project.region}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'Under Development' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{project.capacity}</span>
                  <span>•</span>
                  <span>{project.technology}</span>
                </div>
              </div>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Edit not fully implemented in this MVP, reusing delete */}
                <button 
                  onClick={() => handleDelete(project.id!)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          
          {projects.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No projects found. Create one to get started.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
