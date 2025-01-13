import { GetMemberInfoDtoRequest } from '../dto/generated/GetMemberInfoDtoRequest'
import { GetMemberInfoDtoResult } from '../dto/generated/GetMemberInfoDtoResult'
import { MemberDmo, MemberRequestDmo } from '../model/member'

export class MemberMapper {
  toDto(dmo: MemberRequestDmo): GetMemberInfoDtoRequest {
    return {
      memberId: dmo.memberId,
    }
  }

  toDmo(dto: GetMemberInfoDtoResult | null): MemberDmo | null {
    return dto ? new MemberDmo({ ...dto }) : null
  }
}
