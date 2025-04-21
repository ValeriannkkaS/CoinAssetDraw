import { createGlobalStyle } from 'styled-components';
//Глобальный стиль для дровера, так как с обычными не проходит и ничего не работает
export const GlobalDrawerStyle = createGlobalStyle`
  .ant-drawer-content-wrapper {
    background: ${({ theme }) => theme.drawer.background} !important;
  }

  .ant-drawer-content {
    background: ${({ theme }) => theme.drawer.background} !important;
    box-shadow: ${({ theme }) => theme.cards.boxShadow} !important;
    border-left: ${({ theme }) => theme.cards.headerBorder} !important;
    border-radius: 12px 0 0 12px !important;
  }

  .ant-drawer-header {
    border-bottom: ${({ theme }) => theme.drawer.headerBorder} !important;
    padding: 1rem 1.5rem;
  }

  .ant-drawer-title {
    color: ${({ theme }) => theme.cards.title} !important;
    font-weight: 600;
  }

  .ant-drawer-body {
    color: ${({ theme }) => theme.cards.text} !important;
    padding: 1.5rem;
  }

  .ant-drawer-close {
    color: ${({ theme }) => theme.drawer.closeIcon} !important;
  }
`;
