import { inject, singleton } from 'tsyringe'
import { MemberDataSource } from '../datasource/member'
import { MemberMapper } from '../mapper/member'
import { MemberDmo } from '../model/member'

export interface MemberRepository {
  get(memberId: number): Promise<MemberDmo | null>
}

@singleton()
export class DefaultMemberRepository implements MemberRepository {
  constructor(
    @inject(MemberDataSource) private readonly dataSource: MemberDataSource,
    private readonly mapper: MemberMapper,
  ) {}

  get(memberId: number): Promise<MemberDmo | null> {
    return this.dataSource.get(this.mapper.toDto({ memberId })).then(result => this.mapper.toDmo(result))
  }
}
