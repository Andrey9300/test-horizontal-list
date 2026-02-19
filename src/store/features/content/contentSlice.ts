import { createAppSlice } from "@/store/createAppSlice";
import { fetchContent } from "./contentAPI";
import { TContent } from '@/store/features/content/content'

export interface ContentSliceState {
  items: TContent[]
  status: 'idle' | 'loading' | 'failed' | 'success'
}

const initialState: ContentSliceState = {
  items: [],
  status: 'idle',
}

export const contentSlice = createAppSlice({
  name: 'content',
  initialState,
  reducers: (create) => ({
    loadContentAsync: create.asyncThunk(
      async () => {
        const response = await fetchContent()
        return response.collection
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'success'
          state.items.push(...action.payload)
        },
        rejected: (state) => {
          state.status = 'failed'
        },
      }
    ),
  }),
  selectors: {
    selectItems: (content) => content.items,
    selectStatus: (content) => content.status,
  },
})

export const { loadContentAsync } = contentSlice.actions

export const { selectItems, selectStatus } = contentSlice.selectors
