import axios from 'axios';

interface Data {
  title: string;
  description?: string;
  date: Date;
  priority?: boolean;
}

export default function usePost() {
  async function getPosts() {
    try {
      let res = await fetch('http://localhost:3000/api/task', {
        next: { tags: ['task'] },
      });
      const data = await res.json();
      if (data) {
        return data;
      } else {
        return data;
      }
    } catch (error) {
      console.error('something went wrong while fetching posts');
    }
  }

  async function addPosts(data: Data) {
    try {
      const res = await axios.post('http://localhost:3000/api/task', data);
      if (res.data.success) {
        return res.data;
      } else {
        console.error(res.data);
      }
    } catch (error) {
      console.error('something went wrong while adding posts', error);
    }
  }
  async function deletePost(id: string) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/task/${id}`);
      if (res.data.success) {
        return res.data;
      } else {
        console.error('something went wrong while deleting post');
      }
    } catch (error) {
      console.error('something went wrong while deleting data', error);
    }
  }

  async function getTaskById(id: string) {
    try {
      const res = await axios.get(`http://localhost:3000/api/task/${id}`);
      if (res.data.success) {
        return res.data.task;
      } else {
        return;
      }
    } catch (error) {
      console.error('something went wrong while', error);
    }
  }
  async function getAllTasks() {
    try {
      const res = await axios.get(`http://localhost:3000/task`);
      if (res.data.success) {
        return res.data.taskData;
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }
  return {
    getPosts,
    addPosts,
    deletePost,
    getTaskById,
    getAllTasks,
  };
}
