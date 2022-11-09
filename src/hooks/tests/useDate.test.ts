import { renderHook, screen } from '@testing-library/react';
import { useDate } from '@/hooks';

const setup = () => renderHook(() => useDate(1175714200));

describe('useDate', () => {
  test('string date should be match 04.04.2007', () => {
    const { result } = setup();
    expect(result.current.date).toMatch(/04\.04\.2007/i);
  });

  test('string time should be match 04.04.2007', () => {
    const { result } = setup();
    expect(result.current.time).toMatch(/23:16/i);
  });

  test('initDate is correctly', () => {
    const { result } = setup();
    expect(result.current.initDate.toLocaleString()).toMatch(
      /04\.04\.2007\, 23:16:40/i
    );
  });
});
