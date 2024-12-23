import { singleton } from 'tsyringe'
import { GetMemberInfoDtoResult } from '../dto/generated/GetMemberInfoDtoResult'

@singleton()
export class MemberDataSource {
  get(memberId: number): Promise<GetMemberInfoDtoResult | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ loginId: 'pk911', name: 'PK911' })
      }, 250)
    })

    // TODO: 실제 멤버를 조회하는 API 호출 구현부
    // return fetchApiInstance.post<GetMemberInfoDtoResult>('/member/info', { memberId })
  }
}
