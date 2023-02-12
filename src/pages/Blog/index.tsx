import { useState } from 'react'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AxiosResponse } from 'axios'

import {
  CardApresentacion,
  ContainerBlog,
  WrapperAvatar,
  ContainerInfos,
  PrincipalInfos,
  WrapperNameLink,
  Name,
  LinkGit,
  Description,
  BadgeContainer,
  ContainerMain,
  FormContainerMain,
} from './styles'

import { Badge } from '../../components/Badge'
import { Issues } from './Issues'
import { FormSearch } from './FormSearch'

import { useGetUserGit } from '../../hooks/useGetUserGit'
import { apiAxios } from '../../lib/axios'
import { formatterSearch } from '../../utils/formatterSearch'

const formSchema = yup.object({
  search: yup.string().required('Campo de busca vázio.'),
})

interface IFormInputs {
  search: string
}

interface ICardAPI {
  number: number
  title: string
  created_at: string
  body: string
}
interface IResponseAxios {
  total_count: string
  items: ICardAPI[]
}

export function Blog() {
  const searchForm = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  })

  const [listCards, setListCards] = useState<ICardAPI[]>([])
  const [totalIssues, setTotalIssues] = useState('')

  const { handleSubmit } = searchForm

  const user = useGetUserGit()

  async function handleSearchIssue(dataForm: IFormInputs) {
    const searchFormatted = formatterSearch(dataForm.search)

    const response: AxiosResponse<IResponseAxios> = await apiAxios.get(
      `/search/issues?q=${searchFormatted}%20repo:MaxiiXx23/Github-Blog`,
    )

    const { total_count: totalCount, items } = response.data

    setTotalIssues(totalCount)
    setListCards([...items])
  }

  const textCompany = user.company ? user.company : 'Estudante'
  const textFollowers = `${user.followers} seguidores`

  return (
    <ContainerBlog>
      <ContainerMain>
        <CardApresentacion>
          <WrapperAvatar>
            <img src={user.avatar_url} alt="" />
          </WrapperAvatar>
          <ContainerInfos>
            <PrincipalInfos>
              <WrapperNameLink>
                <Name>{user.name}</Name>
                <LinkGit to="https://github.com/MaxiiXx23" target="_blank">
                  GITHUB <FaExternalLinkAlt size={12} />
                </LinkGit>
              </WrapperNameLink>
              <Description>{user.bio}</Description>
            </PrincipalInfos>
            <BadgeContainer>
              <Badge icon="FaGithub" text={user.login} />
              <Badge icon="FaBuilding" text={textCompany} />
              <Badge icon="FaUserFriends" text={textFollowers} />
            </BadgeContainer>
          </ContainerInfos>
        </CardApresentacion>
      </ContainerMain>

      <FormContainerMain onSubmit={handleSubmit(handleSearchIssue)}>
        <FormProvider {...searchForm}>
          <FormSearch totalCountPublic={totalIssues} />
        </FormProvider>
      </FormContainerMain>
      <ContainerMain>
        <Issues listIssues={listCards} />
      </ContainerMain>
    </ContainerBlog>
  )
}
