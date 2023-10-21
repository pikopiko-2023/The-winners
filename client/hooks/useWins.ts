import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getWins, deleteWin } from '../apis/wins.ts'
import { Win } from '../../models/wins.ts'

export function useWins() {
  const query = useQuery<Win[]>(['wins'], getWins)
  return {
    ...query,
    // Extra queries go here e.g. addWin: useAddWin()
  }
}

export function useWinsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wins'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFruit
export function useDeleteWin() {
  return useWinsMutation(deleteWin)
}
