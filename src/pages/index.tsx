import { L7Editor } from './l7editor.tsx';
import './index.less';

export default () => {
  return (
    <div className="editor">
      <L7Editor activeTab="geojson" />
    </div>
  );
};
