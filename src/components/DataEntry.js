import React, { useState } from "react";

const DataEntry = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    name: "",
    bio: "",
    profilePic: "",
    skills: "",
    interests: "",
  });

  const [projects, setProjects] = useState([
    { title: "", description: "", image: "", github: "" },
  ]);

  const [socialLinks, setSocialLinks] = useState([{ name: "", url: "" }]);

  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (index, e) => {
    const updated = [...projects];
    updated[index][e.target.name] = e.target.value;
    setProjects(updated);
  };

  const handleProjectImageChange = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = [...projects];
      updated[index].image = reader.result;
      setProjects(updated);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSocialChange = (index, e) => {
    const updated = [...socialLinks];
    updated[index][e.target.name] = e.target.value;
    setSocialLinks(updated);
  };

  const handleProfilePicChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setStudent({ ...student, profilePic: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", image: "", github: "" }]);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { name: "", url: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ student, projects, socialLinks });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Data Entry</h2>

      {/* Student Info */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="border p-2 rounded w-full"
          value={student.name}
          onChange={handleStudentChange}
        />
        <input
          type="text"
          name="bio"
          placeholder="Short Bio"
          className="border p-2 rounded w-full"
          value={student.bio}
          onChange={handleStudentChange}
        />
      </div>

      {/* Profile Picture Upload */}
      <h3 className="text-xl font-semibold mt-6">Profile Picture</h3>
      <input
        type="file"
        accept="image/*"
        className="border p-2 rounded w-full mt-2"
        onChange={(e) => handleProfilePicChange(e.target.files[0])}
      />
      {student.profilePic && (
        <img
          src={student.profilePic}
          alt="Profile Preview"
          className="w-32 h-32 object-cover rounded-full mt-4 border-4 border-purple-500"
        />
      )}

      {/* Skills & Interests */}
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma-separated)"
        className="border p-2 rounded w-full mt-4"
        value={student.skills}
        onChange={handleStudentChange}
      />
      <input
        type="text"
        name="interests"
        placeholder="Interests"
        className="border p-2 rounded w-full mt-4"
        value={student.interests}
        onChange={handleStudentChange}
      />

      {/* Projects Section */}
      <h3 className="text-2xl font-bold mt-6">Projects</h3>
      {projects.map((project, index) => (
        <div key={index} className="mt-4 p-4 border rounded shadow-sm">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            className="border p-2 rounded w-full"
            value={project.title}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <input
            type="text"
            name="description"
            placeholder="Project Description"
            className="border p-2 rounded w-full mt-2"
            value={project.description}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub Link"
            className="border p-2 rounded w-full mt-2"
            value={project.github}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <input
            type="file"
            accept="image/*"
            className="mt-2"
            onChange={(e) => handleProjectImageChange(index, e.target.files[0])}
          />
          {project.image && (
            <img
              src={project.image}
              alt="Project Preview"
              className="w-full h-40 object-cover rounded mt-2 border"
            />
          )}
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600"
        onClick={addProject}
      >
        + Add Project
      </button>

      {/* Social Media Section */}
      <h3 className="text-2xl font-bold mt-6">Social Media</h3>
      {socialLinks.map((link, index) => (
        <div key={index} className="mt-2">
          <input
            type="text"
            name="name"
            placeholder="Platform Name (e.g., LinkedIn)"
            className="border p-2 rounded w-full"
            value={link.name}
            onChange={(e) => handleSocialChange(index, e)}
          />
          <input
            type="text"
            name="url"
            placeholder="Profile URL"
            className="border p-2 rounded w-full mt-2"
            value={link.url}
            onChange={(e) => handleSocialChange(index, e)}
          />
        </div>
      ))}
      <button
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600"
        onClick={addSocialLink}
      >
        + Add Social Media
      </button>

      {/* Submit Button */}
      <button
        className="bg-purple-500 text-white px-6 py-2 mt-6 rounded hover:bg-purple-600 block w-full"
        onClick={handleSubmit}
      >
        Generate Portfolio
      </button>
    </div>
  );
};

export default DataEntry;
