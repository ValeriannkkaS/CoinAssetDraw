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
    
  .ant-select-item-option {
      color: ${({ theme }) => theme.form.label} !important;
      &.ant-select-item-option-active{
          background: ${({ theme }) => theme.form.commonFieldsBgHover} !important;
          &:focus-within, 
          &:focus{
              background: ${({ theme }) => theme.form.commonFieldsBgHover} !important;
          }
      }
  }
  
  .ant-select-dropdown { // Стили для дропдауна селекта
      background:${({ theme }) => theme.select.dropdownBg} !important;
      color: ${({ theme }) => theme.form.label} !important;
  }
  .ant-space-item{
      color: ${({ theme }) => theme.select.text}
  }
  .ant-picker-panel-container {
      background: ${({ theme }) => theme.form.commonFieldsBg} !important;
      
  }
  .ant-picker-panel-container th,
  .ant-picker-panel-container button,
  .ant-picker-header-view{
      color: ${({ theme }) => theme.form.inputColor} !important;

  }
  .ant-picker-cell.ant-picker-cell-in-view,
  .ant-picker-time-panel-cell-inner{
      color: ${({ theme }) => theme.form.inputColor} !important;
      
  }
  .ant-picker-dropdown .ant-picker-time-panel-column >li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
      background: ${({ theme }) => theme.form.commonFieldsBgHover} !important;
  }
  .ant-picker-cell{
      color: ${({ theme }) => theme.form.inputPlaceholder} !important;
  }
  
`;
