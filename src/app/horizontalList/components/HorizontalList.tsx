'use client'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  loadContentAsync,
  selectItems,
  selectStatus,
} from '@/store/features/content/contentSlice'
import { ContentList } from '@/components/ui/contentList/ContentList'

export function HorizontalList() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectItems)
  const status = useAppSelector(selectStatus)

  useEffect(() => {
    dispatch(loadContentAsync())
  }, [])

  if (status !== 'success') {
    return <>loading</>
  }

  return <ContentList items={items} />
}