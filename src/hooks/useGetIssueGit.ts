import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiAxios } from '../lib/axios'

interface IIssueResponse {
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: string
  created_at: string
  body: string
}

interface IIssue {
  htmlUrl: string
  title: string
  login: string
  comments: string
  created_at: string
  body: string
}

export function useGetIssueGit() {
  const [issue, setIssue] = useState<IIssue>({} as IIssue)
  const { idIssue } = useParams()

  async function fetchIssue() {
    const response: AxiosResponse<IIssueResponse> = await apiAxios.get(
      `/repos/MaxiiXx23/Github-Blog/issues/${idIssue}`,
    )

    const {
      html_url: htmlUrl,
      title,
      user,
      comments,
      created_at: createdAt,
      body,
    } = response.data

    setIssue({
      htmlUrl,
      title,
      login: user.login,
      comments,
      created_at: createdAt,
      body,
    })
  }

  useEffect(() => {
    fetchIssue()
  }, [])

  return issue
}
