import { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
  .draftJsToolbar__buttonWrapper__1Dmqh {
    display: inline-block;
  }

  .draftJsToolbar__button__qi1gf {
    background: #fbfbfb;
    color: #888;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
  }

  .draftJsToolbar__button__qi1gf svg {
    fill: #888;
  }

  .draftJsToolbar__button__qi1gf:hover, .draftJsToolbar__button__qi1gf:focus {
    background: #f3f3f3;
    outline: 0; /* reset for :focus */
  }

  .draftJsToolbar__active__3qcpF {
    background: #efefef;
    color: #444;
  }

  .draftJsToolbar__active__3qcpF svg {
    fill: #444;
  }
  .draftJsToolbar__separator__3U7qt {
    display: inline-block;
    border-right: 1px solid #ddd;
    height: 24px;
    margin: 0 0.5em;
  }
  .draftJsToolbar__toolbar__dNtBH {
    left: 50%;
    -webkit-transform: translate(-50%) scale(0);
            transform: translate(-50%) scale(0);
    position: absolute;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);
    z-index: 2;
    box-sizing: border-box;
  }

  .draftJsToolbar__toolbar__dNtBH:after, .draftJsToolbar__toolbar__dNtBH:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .draftJsToolbar__toolbar__dNtBH:after {
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #fff;
    border-width: 4px;
    margin-left: -4px;
  }
  .draftJsToolbar__toolbar__dNtBH:before {
    border-color: rgba(221, 221, 221, 0);
    border-top-color: #ddd;
    border-width: 6px;
    margin-left: -6px;
  }
`

export default ResetStyle
