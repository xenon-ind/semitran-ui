import { describe, expect, it } from 'vitest'
import mergeCSSClasses from '../mergeCSSClasses'

describe('mergeCSSClasses', () => {
  it('correctly merges classes', () => {
    expect(mergeCSSClasses('class-a')).toBe('class-a')
    expect(mergeCSSClasses('class-a', 'class-b')).toBe('class-a class-b')
    expect(mergeCSSClasses('class-a', undefined, 'class-b')).toBe('class-a class-b')
  })
})
