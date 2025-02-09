// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import Header from "../Components/Header/Header";

// const AdminPanel = () => {
//     const [projects, setProjects] = useState([]);
//     const [editingProject, setEditingProject] = useState(null); // Хранит редактируемый товар
//     const { register, handleSubmit, reset, setValue } = useForm();

//     const fetchProjects = async () => {
//         try {
//             const response = await axios.get("http://localhost:3001/products");
//             setProjects(response.data);
//         } catch (error) {
//             console.error("Error fetching projects:", error);
//         }
//     };

//     const onSubmit = async (data) => {
//         if (editingProject) {
//             // Редактирование товара
//             try {
//                 await axios.put(`http://localhost:3001/products/${editingProject.id}`, data);
//                 fetchProjects();
//                 reset();
//                 setEditingProject(null); // Сбрасываем редактируемый товар
//             } catch (error) {
//                 console.error("Error updating project:", error);
//             }
//         } else {
//             // Добавление нового товара
//             try {
//                 await axios.post("http://localhost:3001/products", data);
//                 fetchProjects();
//                 reset();
//             } catch (error) {
//                 console.error("Error adding project:", error);
//             }
//         }
//     };

//     const deleteProject = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3001/products/${id}`);
//             fetchProjects();
//         } catch (error) {
//             console.error("Error deleting project:", error);
//         }
//     };

//     const editProject = (project) => {
//         setEditingProject(project); // Устанавливаем текущий редактируемый товар
//         setValue("name", project.name); // Заполняем форму текущими данными
//         setValue("description", project.description);
//         setValue("image", project.image);
//     };

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     return (
       
//         <div style={{ padding: "20px" }}>
//             <Header/>
//             <h1>Admin Panel</h1>
//             <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
//                 <input {...register("name")} placeholder="Project Name" required />
//                 <input {...register("description")} placeholder="Description" required />
//                 <input {...register("image")} placeholder="Image URL" required />
//                 <button type="submit">{editingProject ? "Update Project" : "Add Project"}</button>
//                 {editingProject && (
//                     <button type="button" onClick={() => { reset(); setEditingProject(null); }}>
//                         Cancel
//                     </button>
//                 )}
//             </form>

//             <ul>
//                 {projects.map((project) => (
//                     <li key={project.id}>
//                         <h3>{project.name}</h3>
//                         <p>{project.description}</p>
//                         <img src={project.image} alt={project.name} style={{ width: "100px" }} />
//                         <button onClick={() => editProject(project)}>Edit</button>
//                         <button onClick={() => deleteProject(project.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default AdminPanel;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "../Components/Header/Header";

const AdminPanel = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null); // Хранит редактируемый товар
    const { register, handleSubmit, reset, setValue } = useForm();

    const fetchProjects = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products");
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const onSubmit = async (data) => {
        if (editingProject) {
            // Редактирование товара
            try {
                await axios.put(`http://localhost:3001/products/${editingProject.id}`, data);
                fetchProjects();
                reset();
                setEditingProject(null); // Сбрасываем редактируемый товар
            } catch (error) {
                console.error("Error updating project:", error);
            }
        } else {
            // Добавление нового товара
            try {
                await axios.post("http://localhost:3001/products", data);
                fetchProjects();
                reset();
            } catch (error) {
                console.error("Error adding project:", error);
            }
        }
    };

    const deleteProject = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/products/${id}`);
            fetchProjects();
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const editProject = (project) => {
        setEditingProject(project); // Устанавливаем текущий редактируемый товар
        setValue("name", project.name); // Заполняем форму текущими данными
        setValue("description", project.description);
        setValue("image", project.image);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Header />
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Panel</h1>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mb-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register("name")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Project Name"
                        required
                    />
                    <input
                        {...register("description")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Description"
                        required
                    />
                    <input
                        {...register("image")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Image URL"
                        required
                    />
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                        >
                            {editingProject ? "Update Project" : "Add Project"}
                        </button>
                        {editingProject && (
                            <button
                                type="button"
                                className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition"
                                onClick={() => {
                                    reset();
                                    setEditingProject(null);
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-32 h-32 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => editProject(project)}
                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteProject(project.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
    