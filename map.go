package gen

// Map wraps the Go map type in a generic which provides
// helper functions for accessing slices of keys or values
// without repeating the the implementation for each type
type Map[K comparable, V any] map[K]V

// Keys returns a slice of keys from the map
func (m Map[K, V]) Keys() []K {
	if len(m) == 0 {
		return []K{}
	}

	out := make([]K, len(m))
	i := 0
	for k := range m {
		out[i] = k
		i++
	}
	return out
}

// Values returns a slice of values from the map
func (m Map[K, V]) Values() []V {
	if len(m) == 0 {
		return []V{}
	}

	out := make([]V, len(m))
	i := 0
	for _, v := range m {
		out[i] = v
		i++
	}
	return out
}

// FMap is a flippale map where the key and value
// can be swapped
type FMap[K, V comparable] Map[K, V]

// Flip returns a new FMap with the key and value
// swapped
func (m FMap[K, V]) Flip() FMap[V, K] {
	out := make(FMap[V, K])
	for k, v := range m {
		out[v] = k
	}

	return out
}
