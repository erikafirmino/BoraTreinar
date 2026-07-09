import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from './config';

// Resolve o caminho salvo em `videoPath` (ex. "exercicios/pulley-alto.mp4")
// para uma URL de download temporária do Firebase Storage.
export async function resolverUrlVideo(videoPath) {
  if (!videoPath) return null;
  try {
    return await getDownloadURL(ref(storage, videoPath));
  } catch (err) {
    console.warn(`Vídeo não encontrado no Storage: ${videoPath}`);
    return null;
  }
}

// Upload de um novo GIF/vídeo de demonstração (usado por uma futura tela de admin).
export async function subirVideoExercicio(file, videoPath) {
  const storageRef = ref(storage, videoPath);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
