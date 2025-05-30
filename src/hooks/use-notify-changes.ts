import { useEffect } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { toast } from 'sonner'

import { selectedConversationAtom } from '@/lib/atoms/conversation'
import { isResumedAtom } from '@/lib/atoms/resume'

export const useNotifyChanges = () => {
  const setIsResumed = useSetAtom(isResumedAtom)
  const selectedConversation = useAtomValue(selectedConversationAtom)

  useEffect(() => {
    toast.success(`Atom changed`);
    console.log(selectedConversation);
    setIsResumed(false)
  }, [selectedConversation, setIsResumed])
}
