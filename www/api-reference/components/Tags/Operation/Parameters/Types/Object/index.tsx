import { SchemaObject } from "@/types/openapi"
import TagOperationParametersDefault from "../Default"
import TagOperationParametersProperties from "../Properties"

export type TagOperationParamatersObjectProps = {
  name: string
  schema: SchemaObject
  is_required?: boolean
}

const TagOperationParametersObject = ({
  name,
  schema,
  is_required,
}: TagOperationParamatersObjectProps) => {
  if (schema.type !== "object") {
    return <></>
  }

  if (!schema.properties) {
    return (
      <TagOperationParametersDefault
        name={name}
        schema={schema}
        is_required={is_required}
        className="inline-flex w-[calc(100%-16px)]"
      />
    )
  }

  return (
    <details>
      <summary>
        <TagOperationParametersDefault
          name={name}
          schema={schema}
          is_required={is_required}
          className="inline-flex w-[calc(100%-16px)]"
        />
      </summary>

      <TagOperationParametersProperties
        schema={schema}
        className="bg-medusa-bg-subtle dark:bg-medusa-bg-subtle-dark pl-1"
      />
    </details>
  )
}

export default TagOperationParametersObject