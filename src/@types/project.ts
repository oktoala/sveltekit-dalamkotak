interface Metadata {
  title: string;
  date: string;
  summary: string;
  logo: string;
  tech: string[];
}

declare type ATypedSvelteComponent = {
  /**
   * @internal This is for type checking capabilities only
   * and does not exist at runtime. Don't use this property.
   */
  $$prop_def: any;
  /**
   * @internal This is for type checking capabilities only
   * and does not exist at runtime. Don't use this property.
   */
  $$events_def: any;
  /**
   * @internal This is for type checking capabilities only
   * and does not exist at runtime. Don't use this property.
   */
  $$slot_def: any;

  $on(event: string, handler: ((e: any) => any) | null | undefined): () => void;
};
declare type ConstructorOfATypedSvelteComponent = new (args: {
  target: any;
  props?: any;
}) => ATypedSvelteComponent;

interface Project {
  metadata: Metadata;
  path: string;
  default: ConstructorOfATypedSvelteComponent;
}

export default Project;
