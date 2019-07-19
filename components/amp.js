export default () => (
  <>
    <h3>This is an AMP page</h3>
    <a href='/'>View non-AMP</a>
    <div style={{ maxWidth: 500 }}>
      <amp-img
        width={500}
        height={500}
        src='/static/example.png'
        layout='responsive'
        alt='a penguin'
      />
    </div>
  </>
)