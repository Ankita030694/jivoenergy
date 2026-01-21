"use client";

import React, { useState, useEffect } from 'react';
import { Project, ProjectStatus } from '@/types/project';
import TiptapEditor from './TiptapEditor';

interface ProjectFormProps {
  initialData?: Partial<Project>;
  onSubmit: (data: Omit<Project, 'id'>, coverImage: File | null) => Promise<void>;
  isLoading: boolean;
}

const REGION_COUNTRIES: Record<string, string[]> = {
  "West Africa": [
    "Benin", "Burkina Faso", "Cape Verde", "Côte d'Ivoire", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", 
    "Liberia", "Mali", "Mauritania", "Niger", "Nigeria", "Senegal", "Sierra Leone", "Togo", "São Tomé and Príncipe"
  ],
  "East Africa": [
    "Burundi", "Comoros", "Djibouti", "Eritrea", "Ethiopia", "Kenya", "Madagascar", "Malawi", "Mauritius", 
    "Mozambique", "Rwanda", "Seychelles", "Somalia", "South Sudan", "Tanzania", "Uganda", "Zambia", "Zimbabwe"
  ],
  "Southern Africa": [
    "Angola", "Botswana", "Eswatini", "Lesotho", "Namibia", "South Africa"
  ],
  "Central Africa": [
    "Cameroon", "Central African Republic", "Chad", "Congo (Brazzaville)", "Congo (Kinshasa)", "Equatorial Guinea", "Gabon"
  ],
  "North Africa": [
    "Algeria", "Egypt", "Libya", "Morocco", "Sudan", "Tunisia"
  ]
};

const ProjectForm: React.FC<ProjectFormProps> = ({ initialData, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    title: initialData?.title || '',
    country: initialData?.country || '',
    region: initialData?.region || 'West Africa',
    status: initialData?.status || 'Planned',
    capacity: initialData?.capacity || '',
    technology: initialData?.technology || '',
    description: initialData?.description || '',
    location: initialData?.location || '',
    beneficiary: initialData?.beneficiary || '',
    financing: initialData?.financing || '',
    ...initialData
  });
  
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);

  // Update available countries when region changes
  useEffect(() => {
    const region = formData.region || 'West Africa';
    setAvailableCountries(REGION_COUNTRIES[region] || []);
    
    // Reset country if it's not in the new region list (unless it's initial load/edit)
    if (formData.country && REGION_COUNTRIES[region] && !REGION_COUNTRIES[region].includes(formData.country)) {
       // Optional: clear country or keep it? Let's keep it to be safe but allow change
    }
  }, [formData.region]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.country) return;
    
    await onSubmit(formData as Omit<Project, 'id'>, coverImage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  const inputClass = "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="col-span-2">
          <label className={labelClass}>Project Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="e.g. Solar PV + BESS Hybrid System"
          />
        </div>

        <div>
          <label className={labelClass}>Region</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className={inputClass}
          >
            {Object.keys(REGION_COUNTRIES).map(region => (
                <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select Country</option>
            {availableCountries.map(country => (
                <option key={country} value={country}>{country}</option>
            ))}
             {/* If current value is not in list (e.g. custom or migrated), show it */}
             {formData.country && !availableCountries.includes(formData.country) && (
                <option value={formData.country}>{formData.country}</option>
             )}
          </select>
        </div>

        <div>
          <label className={labelClass}>Location (City/Site)</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
             placeholder="e.g. Santo Amaro"
          />
        </div>

        <div>
          <label className={labelClass}>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Completed">Completed</option>
            <option value="Under Development">Under Development</option>
            <option value="Planned">Planned</option>
            <option value="Operation & Maintenance">Operation & Maintenance</option>
          </select>
        </div>

        {/* Technical Specs */}
        <div>
          <label className={labelClass}>Capacity</label>
          <input
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="e.g. 1.2 MWp"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Technology</label>
          <input
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            placeholder="e.g. Grid-Connected Solar PV"
            className={inputClass}
          />
        </div>

         <div>
          <label className={labelClass}>Beneficiary</label>
          <input
            name="beneficiary"
            value={formData.beneficiary}
            onChange={handleChange}
            placeholder="e.g. Ministry of Health"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Financing</label>
          <input
            name="financing"
            value={formData.financing}
            onChange={handleChange}
            placeholder="e.g. World Bank"
            className={inputClass}
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className={labelClass}>Description</label>
          <TiptapEditor
            content={formData.description || ''}
            onChange={(newContent) => setFormData(prev => ({ ...prev, description: newContent }))}
            className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[400px]"
          />
        </div>

        {/* Image Upload */}
        <div className="col-span-2">
          <label className={labelClass}>Cover Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 text-gray-500"
          />
          {initialData?.imageUrl && !coverImage && (
             <p className="text-sm text-gray-500 mt-1">Current: {initialData.imageUrl.split('/').pop()}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className={`px-8 py-3 rounded-full bg-[#062516] text-[#FFFA84] font-semibold tracking-wide hover:bg-[#08301d] transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Saving...' : 'Save Project'}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
