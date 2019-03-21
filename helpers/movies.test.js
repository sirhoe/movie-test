const target = require('./movies');

describe('Helpers > Movies', () => {
  it('Should filter empty array and return empty array', async () => {
    const sample = [];
    const result = target.filter(sample, { isDrm: true, minEpisodes: 1 });
    expect(result).toEqual(sample);
  });

  it('Should filter by drm and episodes', async () => {
    const sample = [
      { drm: true, episodeCount: 1 },
      { drm: false, episodeCount: 5 },
      { drm: false, episodeCount: 1 }
    ];
    const result = target.filter(sample, { isDrm: true, minEpisodes: 1 });
    expect(result).toEqual([
      { drm: true, episodeCount: 1 }
    ]);
  });

  it('Should work with identical objects', async () => {
    const sample = [
      { drm: true, episodeCount: 1 },
      { drm: true, episodeCount: 5 },
      { drm: true, episodeCount: 1 }
    ];
    const result = target.filter(sample, { isDrm: true, minEpisodes: 1 });
    expect(result).toEqual([
      { drm: true, episodeCount: 1 },
      { drm: true, episodeCount: 5 },
      { drm: true, episodeCount: 1 }
    ]);
  });

  it('Should summarize the output to image, slug, title', async () => {
    const sample = [
      { image: { showImage: 'A1'}, slug: 'S1', title: 'T1', extra: 'E' },
      { image: { showImage: 'A2'}, slug: 'S2', title: 'T2', more: 'M' }
    ];
    const result = target.summarize(sample, { isDrm: true, minEpisodes: 1 });
    expect(result).toEqual([
      { image: 'A1', slug: 'S1', title: 'T1' },
      { image: 'A2', slug: 'S2', title: 'T2' }
    ]);
  });
});
