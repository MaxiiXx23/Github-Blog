import { useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'

import { apiAxios } from '../lib/axios'

interface IUser {
  login: string
  avatar_url: string
  name: string
  company: string | null
  bio: string
  followers: number
}

export function useGetUserGit() {
  const [user, setUser] = useState<IUser>({} as IUser)

  async function fetchGithubUser() {
    const response: AxiosResponse<IUser> = await apiAxios.get(
      '/users/MaxiiXx23',
    )
    const {
      login,
      avatar_url: avatarUrl,
      name,
      company,
      bio,
      followers,
    } = response.data

    setUser({
      login,
      avatar_url: avatarUrl,
      name,
      company,
      bio,
      followers,
    })
  }

  useEffect(() => {
    fetchGithubUser()
  }, [])

  return user
}
