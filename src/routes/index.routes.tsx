import { Routes, Route } from 'react-router-dom'

import { Blog } from '../pages/Blog'
import { Post } from '../pages/Post'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:idIssue" element={<Post />} />
      </Route>
    </Routes>
  )
}
