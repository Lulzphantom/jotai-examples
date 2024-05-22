import { useEffect } from 'react';
import { Atom, useStore } from 'jotai'
import { toast } from 'sonner';

const useOnAtomChange = (atom: Atom<unknown>) => {
  const { sub, get } = useStore();

  useEffect(() => {
    // Subscribe to the atom and show a toast when it changes
    const unsub = sub(atom, () => {
      toast.success(`Atom changed to ${get(atom)}`);
    });

    // Remove the subscription when the component unmounts
    return () => {
      unsub();
    }
  }, [atom, sub, get])
}

export default useOnAtomChange;