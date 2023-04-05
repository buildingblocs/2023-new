import { User } from "@/types/user"
import axios from "axios"

import { API_URL } from "./api_constants";

export async function login(email: string, password: string): Promise<User | null> {
  let user: User | null = null;
  await axios.post(`${API_URL}/login`, { email, password }).then(res => {
    const data = res.data;
    if('result' in data && data.result == false) return;
    user = data;
  })
  return user
}
