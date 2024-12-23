import { inject, singleton } from 'tsyringe'
import { MemberDataSource } from '../datasource/member'
import { GetMemberInfoDtoResult } from '../dto/generated/GetMemberInfoDtoResult'
import { MemberDmo } from '../model/member'

export interface MemberRepository {
  get(memberId: number): Promise<MemberDmo | null>
}

@singleton()
export class DefaultMemberRepository implements MemberRepository {
  constructor(@inject(MemberDataSource) private readonly dataSource: MemberDataSource) {}

  get(memberId: number): Promise<MemberDmo | null> {
    return this.dataSource.get(memberId).then((member: GetMemberInfoDtoResult | null) => {
      return member ? new MemberDmo(member) : null
    })
  }
}
