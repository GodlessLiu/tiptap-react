import TaskList, { TaskListOptions } from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { BaseOptions } from '../../types';
import CommonToolBar from '../components/CommonToolBar';
import { OcticonTasklist16 } from '../../icons/TaskList';
export default TaskList.extend<TaskListOptions & BaseOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarItems({ editor }) {
        return {
          priority: 90,
          component: CommonToolBar,
          props: {
            editor,
            title: 'TaskList',
            Icon: OcticonTasklist16,
            isActive: () => editor.isActive('taskList'),
            action: () => {
              editor.chain().focus().toggleTaskList().run();
            },
          },
        };
      },
    };
  },
  addExtensions() {
    return [TaskItem];
  },
});
