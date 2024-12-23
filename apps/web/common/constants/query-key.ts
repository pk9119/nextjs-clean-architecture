import { ALL } from '.'

const QueryKeys = {
  member: {
    all: [ALL, 'member'] as const,
    details: () => [...QueryKeys.member.all, 'detail'] as const,
    detail: (id: number) => [...QueryKeys.member.details(), { id }] as const,
  },
}

export default QueryKeys
