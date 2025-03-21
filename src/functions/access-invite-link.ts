import { redis } from '../redis/client'

interface AccessInviteLinkParms {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParms) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
