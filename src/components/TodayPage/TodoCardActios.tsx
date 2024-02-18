'use client';
import usePost from '@/customHooks/usePost';
import CustomToolTip from '../CustomToolTip';
import { MoreVertical, Pin, X } from 'lucide-react';
import action from '@/app/actions';

interface ClientProps {
  id: string;
}

const ClientActions: React.FC<ClientProps> = ({ id }) => {
  const { deletePost } = usePost();
  const removePost = async (id: string) => {
    await deletePost(id);
    action('task'); // refetching data
  };
  return (
    <div className="flex gap-2">
      <CustomToolTip message="Pin this task">
        <Pin strokeWidth={1} size={18} />
      </CustomToolTip>
      <CustomToolTip message="Menu">
        <MoreVertical strokeWidth={1} size={18} />
      </CustomToolTip>
      <CustomToolTip message="Remove task">
        <button onClick={() => removePost(id)}>
          <X strokeWidth={1} size={18} />
        </button>
      </CustomToolTip>
    </div>
  );
};

export default ClientActions;
