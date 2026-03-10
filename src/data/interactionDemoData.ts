export interface ButtonDemoItem {
  id: string;
  label: string;
  variant: 'primary' | 'success' | 'default' | 'warning';
  description: string;
  disabled: boolean;
  actionType: 'none' | 'confirm-dialog';
}

export interface ConfirmDialogScenario {
  id: string;
  triggerButtonId: string;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  confirmFeedback: string;
  cancelFeedback: string;
}

export const buttonDemoItems: ButtonDemoItem[] = [
  {
    id: 'primary-action',
    label: '主操作按钮',
    variant: 'primary',
    description: '用于强调页面中的主要操作，引导用户继续浏览或提交操作。',
    disabled: false,
    actionType: 'none'
  },
  {
    id: 'assist-action',
    label: '辅助操作按钮',
    variant: 'success',
    description: '用于次级正向操作，便于区分与主操作的视觉层级。',
    disabled: false,
    actionType: 'none'
  },
  {
    id: 'dialog-trigger',
    label: '打开消息确认框',
    variant: 'warning',
    description: '点击后弹出确认框，展示确认和取消两种结果反馈。',
    disabled: false,
    actionType: 'confirm-dialog'
  },
  {
    id: 'disabled-action',
    label: '禁用状态按钮',
    variant: 'default',
    description: '展示按钮不可用时的视觉状态，避免误触发行为。',
    disabled: true,
    actionType: 'none'
  }
];

export const confirmDialogScenario: ConfirmDialogScenario = {
  id: 'publish-confirm-dialog',
  triggerButtonId: 'dialog-trigger',
  title: '确认执行模板操作',
  message: '该确认框用于演示按钮触发的提示流程，你可以选择确认继续或取消返回。',
  confirmText: '确认',
  cancelText: '取消',
  confirmFeedback: '你已确认执行该模板操作。',
  cancelFeedback: '你已取消本次模板操作。'
};

