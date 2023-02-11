import Taskboard from './taskboard/Taskboard';

const AppStyle = {
  headerContainer: {
    zIndex: 10,
    boxShadow: '2px 2px 8px 6px #979797',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const App = () => {
  return (
    <>
      <div
        className="m-0 p-1 text-light bg-secondary"
        style={AppStyle.headerContainer}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ margin: '0 0.9rem' }}>
            <img
              src="/images/logos/logo-200.png"
              alt="LexusCuminLogo"
              style={{ height: '3rem', width: '3rem' }}
            />
          </div>
          <div>
            <div className="h4" style={{ marginBottom: '0' }}>
              LexusCumin
            </div>
            <div>Free TaskManagement Tool</div>
          </div>
        </div>
        <div style={{ margin: '0 1rem' }}>
          <a
            href="https://github.com/lexuscreations/lexuscumin"
            target="_blank"
            style={{ textDecoration: 'none' }}
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/code-edit.png"
              alt="githubLink"
              style={{ height: '3rem', width: '3rem' }}
            />
          </a>
        </div>
      </div>
      <div className="todolistContainer">
        <Taskboard />
      </div>
    </>
  );
};

export default App;
