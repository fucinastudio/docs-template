import Empty from '@/components/empty';

const themeConfig = {
  logo: (
    <span className="logo">
      FUCINA<span className="brand-gradient">*DOCS</span>
    </span>
  ),
  project: {
    link: 'https://github.com/fucinastudio/fucina',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `Fucina – %s`,
    };
  },
  head: <link rel="icon" type="image/svg" href="/icon.svg" />,
  footer: {
    component: Empty,
  },
  search: {
    loading: 'Loading...',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: Empty,
  },
  feedback: {
    content: null,
  },
  gitTimestamp: null,
};

export default themeConfig;
