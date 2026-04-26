export default function mergeCSSClasses(...classes: Array<string | undefined>) {
  return classes.filter((value) => typeof value !== 'undefined').join(' ')
}
