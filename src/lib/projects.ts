import { db, storage } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    Timestamp,
    serverTimestamp,
    query,
    orderBy
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Project } from "@/types/project";

const COLLECTION_NAME = "projects";

export const getProjects = async (): Promise<Project[]> => {
    try {
        const q = query(collection(db, COLLECTION_NAME)); // Add orderBy when we have field
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Project));
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};

export const addProject = async (data: Omit<Project, 'id'>) => {
    return await addDoc(collection(db, COLLECTION_NAME), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
};

export const updateProject = async (id: string, data: Partial<Project>) => {
    const docRef = doc(db, COLLECTION_NAME, id);
    return await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp()
    });
};

export const deleteProject = async (id: string) => {
    return await deleteDoc(doc(db, COLLECTION_NAME, id));
};

export const uploadProjectImage = async (file: File, path: string): Promise<string> => {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
};
